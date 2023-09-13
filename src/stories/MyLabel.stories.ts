import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

// ? es la inf que tendremos en la pagina
const meta = {
	title: 'UI/MyLabel', //? titulo de la historia (puede agruparse)
	component: MyLabel, // ? componente que queremos mostrar
	//! otras configuraciones
	tags: ['autodocs'], // * crea la pagina de Docs
	parameters: {
		layout: 'centered', // ? para que nuestro componente este en el centro
	},
	// * storybook infiere en el tipo de control para cada props, pero con esta propiedad podemos forzar su tipo y cambiarlo en caso de que no estemos de acuerdo
	argTypes: {
		size: { control: 'inline-radio' }, //? le decimos que el control no sea un radio, sino un inline-radio
		color: { control: 'inline-radio' }, //? le decimos que el control no sea un radio, sino un inline-radio
		fontColor: { control: 'color' }, //? le decimos que el control no sea un radio, sino un inline-radio
	},
} satisfies Meta<typeof MyLabel>; // * con esto va inferir la información que nuestro componente tenga (props)

//? el archivo debe tener una exportación por defecto
export default meta;

//? la historia debe ser de tipo meta
type Story = StoryObj<typeof meta>;

//? el archivo debe tener una historia para exportar
export const Basic: Story = {
	// el nombre de la contante es el nombre de la historia | pagina

	args: {
		label: 'Basic Label',
		size: 'normal',
	},
};

export const AllCaps: Story = {
	args: {
		label: 'All Caps label',
		allCaps: true,
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary label',
		color: 'text-secondary',
	},
};

export const CustomColor: Story = {
	args: {
		label: 'Custom color label',
		fontColor: '#5517ac',
	},
};
