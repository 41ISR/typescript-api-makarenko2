
import type { ChangeEvent, FormEvent } from "react"
import type { ICreateUserRequest } from "../types"

interface IFromProps{
    formData: ICreateUserRequest,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit:(e: FormEvent) => void
}

export const Form = ({formData, handleInputChange, handleSubmit}: IFromProps) => {
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    id="name"
                    placeholder="John Doe"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={formData.email}
                    id="email"
                    placeholder="john@example.com"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Create User
            </button>
        </form>
    )
}