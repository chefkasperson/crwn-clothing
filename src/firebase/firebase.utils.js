import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCLNwlvdV9vLNL3IMPNJDs9tb4sjg9--Nw",
    authDomain: "crwn-db-b68af.firebaseapp.com",
    projectId: "crwn-db-b68af",
    storageBucket: "crwn-db-b68af.appspot.com",
    messagingSenderId: "32248675512",
    appId: "1:32248675512:web:75f7b5525f87f49e7c484d",
    measurementId: "G-6J0982E15D"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exits) {
       const { displayName, email } = userAuth
       const createdAt = new Date()

       try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
       } catch (error) {
          console.log('error creating user', error.message)
       }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase