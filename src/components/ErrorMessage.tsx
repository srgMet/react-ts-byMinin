
interface ErrorMessagePrors {
  error:string
}
export function ErrorMessage({ error }: ErrorMessagePrors) {
  return (
    <p className='text-center text-red-680'> {error}</p>
  )
}