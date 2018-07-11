// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
    render() {
        const childrenWithClassNames = React.Children.map(this.props.children, child => {
            return (
                <div className={this.props.theme}>{child}</div>
            );
        });

        return (
            <div>
                {childrenWithClassNames}
            </div>
        )
    }
}

export default ThemedDecorations;