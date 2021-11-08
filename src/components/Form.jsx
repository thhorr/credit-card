export const Form = ({children, onSubmita}) => {
    
    return (
        <form onSubmit = {onSubmita}>
            {children}
        </form>
    )
}