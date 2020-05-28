export class AppConfig {

    /** Definimos el constructor con el modificador private */
    private constructor() { }

    /** Definimos propiedad privada y statica para que almacenara
     * la unica instancia
     */
    private static instance: AppConfig;

    /**
     * Metodo que retornar la instanica es el unico
     * miembro de la clase que puede ser accedido
     * desde otro contexto
     */
    public static getInstance() {

        if (AppConfig.instance == null) {
            AppConfig.instance = new AppConfig();
        }

        return AppConfig.instance;
    }

}

