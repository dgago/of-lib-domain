export abstract class DbContext {
  /**
   * Constructor.
   */
  constructor(private _connectionString: string) {}

  /**
   * Obtiene la cadena de conexión de este contexto.
   */
  public get connectionString(): string {
    return this._connectionString;
  }

  /**
   * Obtiene un cliente conectado a la base de datos.
   */
  abstract getClient(): Promise<any>;

  /**
   * Obtiene el pool de conexiones a la base de datos.
   */
  abstract getPool();

  /**
   * Obtiene una referencia a la base de datos por defecto.
   */
  abstract getDb(): Promise<any>;

  /**
   * Libera una conexión a la base de datos.
   */
  abstract release(client);

  /**
   * Cierra la conexión establecida por el cliente.
   */
  abstract close(force?: boolean);
}
