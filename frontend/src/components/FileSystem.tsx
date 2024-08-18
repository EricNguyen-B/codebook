import Box from '@mui/material/Box';
import FileTree from './FileTree';
import FileActionBar from './FileActionBar';

type folderTree = Map<string, string[]>;

const folders: folderTree = new Map([
    ["Folder1", ["Item1", "Item2"]],
    ["Folder2", ["Item3", "Item4"]],
]);

export default function FileSystem() {
    return (
        <Box display="flex" sx={{ height: '100vh', flexDirection: 'column', bgcolor: '#64748b' }}>
            <FileActionBar />
            <FileTree folders={folders}/>
        </Box>
    )
}