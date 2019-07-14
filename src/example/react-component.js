import _ from "lodash";
import React from "react";

import {
    loadData,
    updateData,
} from "./stubs";

class App extends React.PureComponent {
    state = {
        "hello": null,
        "loading": true,
    };

    componentDidMount = async () => {
        const response = await loadData();

        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
            "hello": _.get(
                response, "hello"
            ),
            "loading": false,
        });
    };

    handleClick = () => {
        updateData({
            "hello": ", mom!",
        });
    };

    render() {
        const {
            handleClick,
            "state": {
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
                            type="button"
                        />
                    )}

                    <pre>
                        {JSON.stringify(
                            hello,
                            null,
                            2,
                        )}
                    </pre>
                </header>
            </div>
        );
    }
}

export default App;
