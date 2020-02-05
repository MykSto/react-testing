import React from 'react';

const withClass = (WrappenComponent, className) => {
    // return functiona component
    return props => (
        <div className={className}>
            {/* props here are js objects, ... spread operators pulls out all opoperties 
            inside this.props object and distributes them as key value pairs */}
            <WrappenComponent {...props}/>
        </div>
    );
};

export default withClass;