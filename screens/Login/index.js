import * as React from "react";
import { Button, View, Text } from "react-native";
import styles from "./styles";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default Login;