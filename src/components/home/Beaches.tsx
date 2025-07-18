import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { towns } from '../../data/towns';
import TownCard from '../town/TownCard';

const Beaches: React.FC = () => {
  // Get beach destinations
  const beachDestinations = towns.filter((town) =>
    ['ngapali', 'ngwe-saung', 'chaung-tha'].includes(town.id)
  );

  return (
    <section className='py-16 bg-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-end mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>
              Beautiful Beaches
            </h2>
            <p className='mt-2 text-lg text-gray-600'>
              Discover Myanmar's pristine beaches and coastal paradises
            </p>
          </div>
          <Link
            to='/towns'
            className='hidden sm:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors'
          >
            View all beaches
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {beachDestinations.map((town) => (
            <TownCard key={town.id} town={town} />
          ))}
        </div>

        <div className='mt-8 text-center sm:hidden'>
          <Link
            to='/towns'
            className='inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors'
          >
            View all beaches
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Beaches;
