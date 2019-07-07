import _ from 'lodash';
import React from 'react';

import {
    loadData,
    updateData,
} from './stubs';

class App extends React.PureComponent {
    state = {
        loading: true,
        hello: null,
    };

    componentDidMount = async () => {
        const response = await loadData();

        this.setState({
            loading: false,
            hello: _.get(response, 'hello'),
        });
    }

    handleClick = (event) => {
        updateData({
            hello: ', mom!',
        });
    }

    render() {
        const {
            handleClick,
            state: {
                loading,
                hello,
            },
        } = this;

        const showLoading = loading;
        const showButton = !showLoading;

        return (
            <div className="App">
                <header className="App-header">
                    {showLoading && (
                        <div>
                            Loading...
                        </div>
                    )}

                    {showButton && (
                        <button
                            onClick={handleClick}
                        />
                    )}

                    <pre>
                        {JSON.stringify(hello, null, 2)}
                    </pre>
                </header>
            </div>
        );
    }
}

export default App;
