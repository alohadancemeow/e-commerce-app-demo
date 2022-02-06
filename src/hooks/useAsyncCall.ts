import React, { useState } from "react"

// # A custom hook
export const useAsyncCall = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    return { loading, setLoading, error, setError }
}