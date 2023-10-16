import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import CustomerIcon from '@mui/icons-material/Store';
import InvoiceIcon from '@mui/icons-material/Receipt';
import FinanceIcon from '@mui/icons-material/AttachMoney';
import HRIcon from '@mui/icons-material/ManageAccounts';
import InputIcon from '@mui/icons-material/Create';
import RuleIcon from '@mui/icons-material/Rule';
import BranchIcon from '@mui/icons-material/HouseSiding';
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarData = [

    {
        title: "Dashboard",
        icon: < DashboardIcon / > ,
        link: "/dashboard"
    },
    {
        title: "Messages",
        icon: < SmsIcon / > ,
        link: "/messages"
    },
    {
        title: "Mails",
        icon: < EmailIcon / > ,
        link: "/mails"
    },
    {
        title: "Customer",
        icon: < CustomerIcon / > ,
        link: "/customer"
    },
    {
        title: "Invoicing",
        icon: < InvoiceIcon / > ,
        link: "/invoice"
    },
    {
        title: "Finance",
        icon: < FinanceIcon / > ,
        link: "/finance"
    },
    {
        title: "Human Resource",
        icon: < HRIcon / > ,
        link: "/human-resource"
    },
    {
        title: "Data Input",
        icon: < InputIcon / > ,
        link: "/data-input"
    },
    {
        title: "Roles and Permissions",
        icon: < RuleIcon / > ,
        link: "/roles-permission"
    },
    {
        title: "Branches",
        icon: < BranchIcon / > ,
        link: "/branches"
    },
    {
        title: "Settings",
        icon: < SettingsIcon / > ,
        link: "/settings"
    }
]