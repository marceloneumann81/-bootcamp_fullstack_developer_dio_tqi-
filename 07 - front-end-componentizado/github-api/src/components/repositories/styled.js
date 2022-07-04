import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
    
    
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0px;
`;

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;    
    z-index: 9999;
    background-color:#fff;
    margin: 8px;

    &:focus{
        outline:none;
    }
    
    &.is-selected {        
        box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.3);
      }
`;


export const WrapperTabPanel = styled(TabPanel)`
    
    padding: 16px;
       
    display: none;
    margin-top: -5px;

    &.is-selected{
        display: block;
        border-bottom: 1px solid white;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius:0;
        border-bottom-right-radius:0;
        border-bottom: 1px solid white;
    }

`;

export const WrapperList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`;


WrapperTabs.tabsRole = 'Tabs';
WrapperTab.tabsRole = 'Tab';
WrapperTabPanel.tabsRole = 'TabPanel';
WrapperTabList.tabsRole = 'TabList';