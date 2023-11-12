import  {useState} from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');

    const handleInputchange = (evt) => {
        setSearch(evt.target.value);
    };

    return (
        <div>
            <p>Mi Boletera</p>
            <input 
                placeholder="Busca tu evento favorito"
                onChange={handleInputchange} 
                value={search}
            />
        </div>
    );
};

export default Navbar;