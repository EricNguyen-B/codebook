import { Box } from '@mui/material';
import FileSystem from './FileSystem';
import Workspace from './Workspace';

type folderTree = Map<string, string[]>;

const folders: folderTree = new Map([
    ["Folder1", ["Item1", "Item2"]],
    ["Folder2", ["Item3", "Item4"]],
]);

const folderNames = ["Folder 1", "Folder 2"];

export default function HomePage() {
    return (
        <Box display="flex">
            <FileSystem />
            <Workspace tabs={folderNames}/>
        </Box>
    )
}
