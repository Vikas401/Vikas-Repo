import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'; 

const Directory = ({ sections }) => (
    
    
            <div className='directory-menu'>
            {
          sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
        </div>
        );

        const mapStateProps = createStructuredSelector({
          sections: selectDirectorySections
        });
            


export default connect(mapStateProps)(Directory);