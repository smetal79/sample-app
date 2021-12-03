import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from "react-router-dom";

import { routeConfig } from '../routes';

export default function LeftMenuBar({ cartItems }) {
  return (
    <div>
      <ListItem button title="Cart">
        <ListItemIcon>
          <NavLink to={routeConfig.cart.path}>
          <IconButton color="inherit">
              <Badge badgeContent={cartItems} color="secondary">
              <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>

      <ListItem button title="List products">
        <ListItemIcon>
          <NavLink to={routeConfig.products.path}>
            <AssignmentIcon />
          </NavLink>
        </ListItemIcon>
        <ListItemText primary="products" />
      </ListItem>
    </div>
  );
}