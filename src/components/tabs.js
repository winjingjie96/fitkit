import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs.css";
import HorizontalCustomLabels from "./slider";
import React from "react";

class AnimatedTab extends React.Component {
  state = {
    stage: [
      {
        value: 100,
        label: "Stage I",
      },
      {
        value: 92,
        label: "Stage II",
      },
      {
        value: 76,
        label: "Stage III",
      },
      {
        value: 21,
        label: "Stage IV",
      },
    ],
  };
  handleFemale45 = () => {
    this.setState({
      stage: [
        {
          value: 100,
          label: "Stage I",
        },
        {
          value: 92,
          label: "Stage II",
        },
        {
          value: 76,
          label: "Stage III",
        },
        {
          value: 21,
          label: "Stage IV",
        },
      ],
    });
  };
  handleFemale55 = () => {
    this.setState({
      stage: [
        {
          value: 90,
          label: "Stage I",
        },
        {
          value: 88,
          label: "Stage II",
        },
        {
          value: 78,
          label: "Stage III",
        },
        {
          value: 16,
          label: "Stage IV",
        },
      ],
    });
  };

  handleFemale65 = () => {
    this.setState({
      stage: [
        {
          value: 89,
          label: "Stage I",
        },
        {
          value: 82,
          label: "Stage II",
        },
        {
          value: 71,
          label: "Stage III",
        },
        {
          value: 15,
          label: "Stage IV",
        },
      ],
    });
  };

  handleFemale75 = () => {
    this.setState({
      stage: [
        {
          value: 70,
          label: "Stage I",
        },
        {
          value: 62,
          label: "Stage II",
        },
        {
          value: 41,
          label: "Stage III",
        },
        {
          value: 3,
          label: "Stage IV",
        },
      ],
    });
  };

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <button onClick={this.handleFemale45}>Female</button>
          </Tab>
          <Tab>
            <button onClick={this.handleIncrement}>Male</button>
          </Tab>
        </TabList>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>
                <button onClick={this.handleFemale45}>45-54 years old</button>
              </Tab>
              <Tab>
                <button onClick={this.handleFemale55}>55-64 years old</button>
              </Tab>
              <Tab>
                <button onClick={this.handleFemale65}>65-74 years old</button>
              </Tab>
              <Tab>
                <button onClick={this.handleFemale75}>75+ years old</button>
              </Tab>
            </TabList>
            <TabPanel>
              {/* <h2>Any content 2.1</h2> */}
            </TabPanel>
            <TabPanel>
              {/* <h2>Any content 2.1</h2> */}
            </TabPanel>
            <TabPanel>
              {/* <h2>Any content 3.1</h2> */}
            </TabPanel>
            <TabPanel>
              {/* <h2>Any content 4.1</h2> */}
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>45 - 54 years old</Tab>
              <Tab>55 - 64 years old</Tab>
              <Tab>65 - 74 years old</Tab>
              <Tab>75+</Tab>
            </TabList>
            <TabPanel>
              <h2>Any content 1.1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2.1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3.1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4.1</h2>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <HorizontalCustomLabels stages={this.state.stage} />
        <h1>Stage I: {this.state.stage[0].value}%</h1>
        <h1>Stage II: {this.state.stage[1].value}%</h1>
        <h1>Stage III: {this.state.stage[2].value}%</h1>
        <h1>Stage IV: {this.state.stage[3].value}%</h1>

      </Tabs>
    );
  }
}

export default AnimatedTab;
