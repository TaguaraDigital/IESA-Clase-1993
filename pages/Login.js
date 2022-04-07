const Login = () => {
  return (
    <div>
      <h1>Gracias por volver</h1>
      <form>
        <div>
          <label htmlFor="identification">Identificación</label>
          <input />
          <p className="error">{errors?.identification?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Clave</label>
          <input placeholder="Clave" />
          <p className="error">{errors?.password?.message}</p>
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
