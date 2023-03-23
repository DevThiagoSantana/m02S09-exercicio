import { Spinner } from 'phosphor-react';

import CourseFilter from '../../components/CourseFilter';
import CourseList from '../../components/CourseList';
import useCourseList from '../../hooks/useCourseList';

import emptyState from '../../assets/empty.svg';

import './HomePage.css';

function HomePage() {
  const { courses, error, isLoading, fetchData } = useCourseList();

  return (
    <div className='homePageContainer'>
      <CourseFilter onFilter={fetchData} />

      {isLoading && <Spinner width={100} />}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!courses.length && <CourseList list={courses} />}

      {!isLoading && !error && !courses.length && (
        <img height={500} src={emptyState} alt='Imagem de nenhum item encontrado' />
      )}
    </div>
  );
}

export default HomePage;
