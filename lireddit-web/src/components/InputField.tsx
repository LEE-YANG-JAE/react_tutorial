import React, { InputHTMLAttributes } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
    placeholder: string;
    name: string;
    type?: string;
};

// '' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = (props) => {
	const [ field, { error } ] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{props.label}</FormLabel>
			<Input {...field} id={field.name} placeholder={props.placeholder} type={props.type ? props.type : 'text' }/>
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
