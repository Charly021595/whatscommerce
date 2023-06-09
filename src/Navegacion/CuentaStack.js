import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmarNumero from "../Pantallas/Cuenta/ConfirmarNumero";
import EnviarConfirmacion from "../Pantallas/Cuenta/EnviarConfirmacion";

const Stack = createStackNavigator();

export default function CuentaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                component={ConfirmarNumero} 
                name="confirmar-movil" 
                options={{
                    title: "Confirma Número",
                    headerStyle: { backgroundColor: "#128c75" },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen 
                component={EnviarConfirmacion} 
                name="enviar-confirmacion" 
                options={{
                    title: "Confirma tu Número De Teléfono",
                    headerStyle: { backgroundColor: "#128c75"},
                    headerTintColor: "#fff",
                }}
            />
        </Stack.Navigator>
    )
}