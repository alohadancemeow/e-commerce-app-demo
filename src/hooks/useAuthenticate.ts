import { useAsyncCall } from './useAsyncCall'
import { Inputs } from "../types"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/config'


export const useAuthenticate = () => {

    // use a custom hook
    const { loading, setLoading, error, setError } = useAsyncCall()

    const signup = async (data: Inputs) => {

        const { username, email, password } = data

        setLoading(true)
        
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                console.log("user", user);

                if (auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: username
                    }).then((res) => {
                        // Profile updated!
                        console.log(res);

                        setLoading(false)

                    }).catch((error) => {
                        // An error occurred
                        console.log(error);
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);

                const errorMessage = error.message;
                console.log(errorMessage);

                setError(errorMessage)
                setLoading(false)
            });

    }

    return { signup, loading, error }
}