import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selected = "new";

const SideBar = () => {
  return (
    <Stack
        sx={{
            overflowY:"auto",
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'},
        }}
    >
        {categories.map((category)=>(
            <button
                className="category-btn"
                style={{
                    background: category.name === selected && '#FC1503',
                    color: 'white'
                }}
            >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar