import { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { loginSchema } from '../../validations/loginValidations';
import { Formik, ErrorMessage } from 'formik';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
    const [loginValues, setLoginValues] = useState()
    const navigation = useNavigation()

    const intialValues = {
        username: "",
        password: ""
    }

    const submitFormHandler = (values, resetForm) => {
        setLoginValues(values)
        resetForm()
        navigation.replace("Application")
    }
    return (
        <Formik initialValues={intialValues} validationSchema={loginSchema} onSubmit={(values, { resetForm }) => submitFormHandler(values, resetForm)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View className="w-full space-y-2">
                    <TextInput
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        className="bg-white p-3 px-4 w-full rounded-lg border-[1px] border-gray-200"
                        placeholder='Username,email or mobile number'
                        autoFocus
                        autoCapitalize='none'
                    />
                    <ErrorMessage name="username" render={(error) => (
                        <View className="flex flex-row items-center space-x-1 mt-2 px-2">
                            <Icon
                                name='alert-circle-outline'
                                type='ionicon'
                                color='#DC2626'
                                size={18}
                                onPress={() => console.log('hello')} />
                            <Text className="text-red-600 text-sm">{error}</Text>
                        </View>
                    )} />
                    <TextInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                        textContentType='password'
                        autoCorrect={false}
                        className="bg-white p-3 px-4 w-full rounded-lg border-[1px] border-gray-200"
                        placeholder='Password'
                    />
                    <ErrorMessage name="password" render={(error) => (
                        <View className="flex flex-row items-center space-x-1 mt-2 px-2">
                            <Icon
                                name='alert-circle-outline'
                                type='ionicon'
                                color='#DC2626'
                                size={18}
                                onPress={() => console.log('hello')} />
                            <Text className="text-red-600 text-sm">{error}</Text>
                        </View>
                    )} />
                    <Pressable onPress={handleSubmit}>
                        <Text className="bg-blue-600 text-blue-100 text-center p-3 rounded-lg text-base my-2">Log In</Text>
                    </Pressable>
                    <Text className="text-gray-700 text-center text-sm font-bold">Forgot password?</Text>
                </View>
            )}
        </Formik>
    );
}

export default LoginForm;
