import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [ category, setCategory ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(cats => [category, ...cats]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={category}
                onChange={ (e) => setCategory(e.target.value) }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;