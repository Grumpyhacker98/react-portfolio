import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ThemeContext } from '../context/ThemeContext';

function PortfolioDisplayProgress({ progress }) {
    const { theme } = useContext(ThemeContext)

    if (progress === 100) {
        return <ProgressBar variant="success" now={progress} className="shadow-sm"
            label={<p className={"tItalic m-0 " + theme.txt2}>Finished</p>} />;
    } else if (progress > 95) {
        return <ProgressBar variant="success" now={progress} className="shadow-sm"
            label={<p className={"tItalic m-0 " + theme.txt2}>Polished</p>} />;
    } else if (progress > 75) {
        return <ProgressBar variant="success" now={progress} className="shadow-sm"
            label={<p className={"tItalic m-0 " + theme.txt2}>Unpolished</p>} />;
    } else if (progress > 50) {
        return <ProgressBar variant="warning" now={progress} className="shadow-sm"
            label={<p className={"tItalic m-0 " + theme.txt2}>Functional</p>} />;
    } else {
        return <ProgressBar variant="danger" now={progress} className="shadow-sm"
            label={<p className={"tItalic m-0 " + theme.txt2}>Theoretical</p>} />;
    }
}

export default PortfolioDisplayProgress