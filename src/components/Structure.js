import React, { useState } from 'react';
import explorer from '../data/folderData';
import Files from './Files';
import useTraverseTree from '../hooks/useTraverseTree';

function Structure() {
    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    return (
        <div>
            <Files handleInsertNode={handleInsertNode} explorer={explorerData}></Files>
        </div>
    );
}

export default Structure;
