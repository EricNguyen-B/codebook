import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

interface WorkSpaceProps {
    tabs: string[];
}

export default function WorkSpace({ tabs }: WorkSpaceProps) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent | null, newValue: string | number | null) => {
        if (typeof newValue === 'number')
            setSelectedTab(newValue);
    };

    let doTabsExist: boolean = false;

    if (tabs != undefined && tabs.length > 0) 
        doTabsExist = true;

    return (
        <Box flexGrow={1} sx={{ bgcolor: '#1e293b' }}> 
            {doTabsExist && (
                <Tabs value={selectedTab} onChange={handleChange}>
                    <TabsList>
                        {tabs.map((tab, index) => (
                            <Tab key={index} value={index}>
                                {tab}
                            </Tab>
                        ))}
                    </TabsList>
                    {tabs.map((tab, index) => (
                        <TabPanel key={index} value={index} hidden={selectedTab !== index}>
                            {`Content for ${tab}`}
                        </TabPanel>
                    ))}
                </Tabs>
            )}
        </Box>
    );
}
