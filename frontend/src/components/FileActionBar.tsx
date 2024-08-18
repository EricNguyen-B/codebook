import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { IconButton } from '@mui/material';

type folderTree = Map<string, string[]>;
const folders: folderTree = new Map([
    ["Folder1", ["Item1", "Item2"]],
    ["Folder2", ["Item3", "Item4"]],
]);

export default function FileActionBar() {
    const [open, setOpen] = useState(false);
    const [folderName, setFolderName] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFolderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFolderName(event.target.value);
    };

    // TODO: API Request to create folder in database
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (folderName.trim()) {
            if (folders.has(folderName)) {
                alert('Folder already exists');
            } else {
                folders.set(folderName, []);
                console.log('Added new folder:', folderName);
            }
        }
        handleClose();
    };

    return (
        <div>
            <Stack direction="row" spacing={3} paddingLeft={2}>
                <Button 
                    variant="contained" 
                    startIcon={<CreateNewFolderIcon/>}
                    onClick={handleClickOpen}
                    size="small"
                >
                    Create Folder
                </Button>
            </Stack>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Folder</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the name of the new folder.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="folderName"
                        name="folderName"
                        label="Folder Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={folderName}
                        onChange={handleFolderNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={handleFormSubmit}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
