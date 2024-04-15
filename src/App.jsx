import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {

	const { newName, newNumber, handleNewNameValue, handleNewNumberValue } = useForm();
	const { newFilter, handleNewFilterValue } = useFormFilter();
	const { persons, handleNewPersonsValue } = usePersons();

	const texto = import.meta.env.VITE_MI_TEXTO;
	

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setNewFilter={ handleNewFilterValue }/>
			<p>{{ texto }}</p>
			<PersonForm 
				newName={ newName } 
				setNewName={ handleNewNameValue } 
				newNumber={ newNumber }
				handleNewNumber={ handleNewNumberValue }
				persons={ persons }
				setPersons={ handleNewPersonsValue }

			/>
			<Numbers 
				newFilter={ newFilter } 
				persons={ persons }
				setPersons= { handleNewPersonsValue }
			/>
		</div>
	);
};

export default App;
