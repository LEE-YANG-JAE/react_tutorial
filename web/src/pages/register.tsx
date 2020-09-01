import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';

interface registerProps {}

const REGISTER_MUT = `
mutation Register($username : String!, $password:String!) {
	register(options: {username : $username, password : $password}) {
	  user {
		id
		username
	  }
	  errors {
		field
		message
	  }
	}
  }
`;

export const Register: React.FC<registerProps> = ({}) => {
	const [ , register ] = useMutation(REGISTER_MUT);
	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values) => {
					console.log(values);
					const response = await register(values);
					console.log(response);
					return response;
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField name="username" placeholder="username" label="Username" />
						<Box mt={4}>
							<InputField name="password" placeholder="password" label="Password" type="password" />
						</Box>
						<Button mt={4} type="submit" variantColor="teal" isLoading={isSubmitting}>
							register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Register;
