import * as React from 'react';
import { BsLaptop, BsPhone, BsFilter, BsShift, BsShop } from 'react-icons/bs';
import {
  GiClothes,
  GiHomeGarage,
  GiConcreteBag,
  GiClover,
  GiCorkscrew,
} from 'react-icons/gi';
import { AiOutlineCar, AiOutlineLogin } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { selectUserName, setLogOut } from '../feautres/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';

const SideBar = ({ filterP, setAllCategory }) => {
  const userName = useSelector(selectUserName);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setLogOut());
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="flex justify-start max-[676px]:invisible font-['Cairo'] text-medium">
      <aside className="w-52 absolute mt-6">
        <div className="px-0 py-6 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <button
                onClick={setAllCategory}
                className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsFilter size={24} />
                <span className="ml-2">{t('All Products')}</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => filterP('bag')}
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <GiConcreteBag size={19} />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  {t('Bags')}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => filterP('Decor')}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClover size={23} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {' '}
                  {t('Decor')}{' '}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => filterP('Shirt')}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClothes size={19} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {t('Shirt')}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => filterP('Accessories')}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiCorkscrew size={21} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {t('Jewelry')}
                </span>
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => filterP('kitchen')}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiHomeGarage />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {t('Home')}
                </span>
              </button>
            </li> */}

            <li>
              {userName ? (
                <button
                  onClick={() => logOut()}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BiLogOutCircle size={21} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {t('SignOut')}{' '}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <AiOutlineLogin size={20} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {t('login')}{' '}
                  </span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
