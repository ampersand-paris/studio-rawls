import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function Text(props) {

        let text = props.data.attributes.Section[0].Text_Body
        let anchor = props.data.attributes.Section_Title
        let sectionColor = props.data.attributes.Section_Color

        return (
            <div className="section-wrapper text-section" >
                <a className="scroll-margin" id={ anchor }>
                    <BlocksRenderer 
                        content={ text } 
                        blocks={{
                            // You can use the default components to set class names...
                            list: ({ children }) => <ul style={{ color: sectionColor }}>{children}</ul>,
                            // ...or point to a design system
                            heading: ({ children, level }) => {
                              switch (level) {
                                case 1:
                                  return <h1 style={{ color: sectionColor }} variant="h1">{children}</h1>
                              }
                            },
                        }}
                    />
                </a>
            </div>
        );
    }
    
    export default Text;