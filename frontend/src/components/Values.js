import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function Values(props) {

        let values = props.data.Entry

        return (
            <div className="section-wrapper flex column jc-center" >
                {values.map((value, index) => 
                    <div className="width-50">
                        <h2>{ value.Value }</h2>
                        <BlocksRenderer 
                            content={ value.Description } 
                            blocks={{
                                paragraph: ({ children }) => <p className="no-margin-top">{ children }</p>,
                                heading: ({ children, level }) => {
                                switch (level) {
                                    case 2:
                                        return <h2 style={{ margin: '0px' }}>{ children }</h2>
                                }
                                },
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }
    
    export default Values;