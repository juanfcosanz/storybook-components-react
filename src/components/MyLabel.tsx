import './MyLabel.css';

export interface Props {
	/**
	 * Text to display
	 */
	label: string;

	/**
	 * Label size
	 */
	size?: 'normal' | 'h1' | 'h2' | 'h3';

	/**
	 * Capitalize all letters
	 */
	allCaps?: boolean;

	/**
	 * Label color
	 */
	color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

	/**
	 * Font color
	 */
	fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, fontColor, color }: Props) => {
	return (
		<span className={`${size} ${color}`} style={{ color: fontColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

// * Mejora la compatibilidad de nuestro paquete cundo se utilice este componente
export default MyLabel;
