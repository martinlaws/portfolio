import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
import Table from "./table"

const Articles = () => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         articles {
  //           title
  //           datePublished
  //         }
  //       }
  //     }
  //   `
  // )

  // const metaDescription = description || site.siteMetadata.description

  const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0.5rem;
    color: var(--fontPrimary);
  `

  const H1 = styled.h1`
    color: var(--fontPrimary);
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    margin-bottom: 0;
  `

  const CTALink = styled(Link)`
    width: max-content;
    color: var(--linkPrimary);
    font-family: "IBM Plex Sans", serif;
    font-weight: 600;
    text-decoration: none;
    padding-top: 3px;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    letter-spacing: 0.04em;
    line-height: 1.4em;
    text-transform: uppercase;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

    &:hover {
      color: var(--other);
      border-color: var(--fontPrimary);
    }

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  `

  const site = {
    articles: [
      {
        title: "High Tide, Low Tide",
        date: "April 2020",
        path: "/writing/high-tide-low-tide/",
      },
      {
        title: "Design Thinking for Developers",
        date: "January 2020",
        path: "/writing/design-thinking-for-developers/",
      },
      {
        title: "InVision DSM",
        date: "November 2019",
        path: "/writing/invision-dsm/",
      },
    ],
  }

  return (
    <Main>
      <H1>Selected writing</H1>

      <Table data={site.articles} />
      <CTALink to="/">Go back to the homepage</CTALink>
    </Main>
  )
}

export default Articles
