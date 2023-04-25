import { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { loginSchema } from '../../validations/loginValidations';
import { Formik, ErrorMessage } from 'formik';
import { Icon } from 'react-native-elements'


const LoginForm = () => {
    const [loginValues, setLoginValues] = useState()

    const intialValues = {
        username: "",
        password: ""
    }

    const submitFormHandler = (values, resetForm) => {
        setLoginValues(values)
        resetForm()
        console.log(loginValues)
    }
    return (
        <Formik initialValues={intialValues} validationSchema={loginSchema} onSubmit={(values, { resetForm }) => submitFormHandler(values, resetForm)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View className="w-full space-y-4">
                    <TextInput
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        className="bg-gray-100 p-2 px-4 w-full rounded-lg border-2 border-gray-200"
                        placeholder='Phone number, username or email'
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
                        className="bg-gray-100 p-2 px-4 w-full rounded-lg border-2 border-gray-200"
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
                    <Text className="text-blue-400 text-right font-bold">Forgot password?</Text>
                    <Pressable onPress={handleSubmit}>
                        <Text className="bg-blue-500 text-white text-center p-3 rounded-lg text-base my-5">Log In</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
}

export default LoginForm;
