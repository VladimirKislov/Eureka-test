import "./main.global.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header";
import { ShortOrder } from "./shared/ShortOrder";
import { Table } from "./shared/Table";
import { Form } from "./shared/Form";
import { Work } from "./shared/Work";
import { Service } from "./shared/Service";
import { Certificate } from "./shared/Certificate";
import { Partner } from "./shared/Partner";
import { Feedback } from "./shared/Feedback";
import { Footer } from "./shared/Footer";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <ShortOrder />
      <Table />
      <Form />
      <Work />
      <Service />
      <Certificate />
      <Partner />
      <Feedback />
      <Footer />
    </Layout>
  );
}

export const App = hot(AppComponent);
