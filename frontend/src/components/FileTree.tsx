import Box from '@mui/material/Box';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

type folderTree = Map<string, string[]>;

interface FileTreeProps {
    folders: folderTree;
}

export default function FileTree({ folders }: FileTreeProps) {
    let folderItemsArray = Array.from(folders, ([folderName, folderItems]) => ({ folderName, folderItems }));
    return (
        <Box 
            sx={{ minHeight: 352, minWidth: 165 }} 
            display="flex"
            flexDirection="column"
        >   
            <SimpleTreeView>
                {folderItemsArray.map((folder) => (
                    <TreeItem key={folder.folderName} itemId={folder.folderName} label={folder.folderName}>
                        {folder.folderItems.map((item) => (
                            <TreeItem key={item} itemId={item} label={item} />
                        ))}
                    </TreeItem>
                ))}
            </SimpleTreeView>
        </Box>
    )
}
