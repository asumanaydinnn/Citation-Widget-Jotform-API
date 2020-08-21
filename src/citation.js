import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";

function Citation() {
  return (
    <div>
      <h1>Citation Widget </h1>
      <Tabs>
        <TabList>
          <Tab>APA</Tab>
          <Tab>MLA</Tab>
          <Tab>Chicago A</Tab>
          <Tab>Chicago B</Tab>
          <Tab>Turabian</Tab>
          <Tab>Harvard</Tab>
          <Tab>Vancouver</Tab>
          <Tab>OSCOLA</Tab>
          <Tab>IEEE</Tab>
          <Tab>AMA</Tab>
          <Tab>ACS</Tab>
          <Tab>NLM</Tab>
          <Tab>AAA</Tab>
          <Tab>APSA</Tab>
        </TabList>
        <TabPanel>
          <p> APA Citation machine</p>
          <p>
            Source:{" "}
            <a
              href="https://https://www.scribbr.com/category/apa-style/"
              target="_blank"
            >
              APA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>MLA Citation Machine</p>
          <p>
            Source:{" "}
            <a
              href="https://en.wikipedia.org/https://www.scribbr.com/category/mla/"
              target="_blank"
            >
              MLA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>Chicago A Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              Chicago A
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>Chicago B Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              Chicago B
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>Turabian Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              Turabian
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>Harvard Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              Harvard
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>Vancouver Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              Vancouver
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>OSCOLA Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              OSCOLA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>IEEE Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              IEEE
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>AMA Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              AMA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>ACS Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              ACS
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>NLM Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              NLM
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>AAA Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              APSA
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>APSA Citation</p>
          <p>
            Source:{" "}
            <a href="" target="_blank">
              APSA
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Citation;
