import Paragraph from './Paragraph.jsx'

function Paragraphs(props) {
    const paragraphs = props.value

    return (
        paragraphs.map((paragraph) =>(
            <Paragraph key={paragraph.index} value={paragraph} />

        ))
    )
}

export default Paragraphs