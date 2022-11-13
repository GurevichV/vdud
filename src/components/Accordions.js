import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from '../data'

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}

const dataA_Z =  data.sort(SortArray)

  return (
    <div>
      {dataA_Z.map( item => {
        const accordionId = item.id;
        return (
          <Accordion key={item.id} expanded={expanded === `panel${accordionId}`} onChange={handleChange(`panel${accordionId}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${accordionId}bh-content`}
              id={`panel${accordionId}bh-header`}
            >
              <h3>
                {item.name}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              {
                item.movies ?
                <>
                  <h4>Фильмы</h4>
                  <ul>
                    {item.movies.map( (movie, item) => <li key={`movie-${accordionId}-${item}`}>{movie}</li>)}
                  </ul>
                </> : null
              } 
              {
              item.books ? 
                <>
                  <h4>Книги</h4>
                  <ul>
                    {item.books?.map( (book, item) => <li key={`book-${accordionId}-${item}`}>{book}</li>)}
                  </ul>
                </>: null
              }
            </AccordionDetails>
          </Accordion>
        )
      })}
      
    </div>
  );
}