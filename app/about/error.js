"use client"

export default function Error ({ error, reset }) {
    return (
        <div>
            Ceva nu este in regula : {error.message}
            <button onClick={() => {reset()}}>Incearca din nou</button>
        </div>
    )
}