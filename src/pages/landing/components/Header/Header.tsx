import {
  CashStackIcon,
  DieIcon,
  DiscordIcon,
  ExpandMoreIcon,
  GiftBoxIcon,
  StopwatchIcon,
  TrophyIcon,
  UserIcon,
} from '@/assets/svgs';
import {
  AnimateInOut,
  Button,
  Overlay,
  UserProfile,
  Wallet,
} from '@/components';
import { Disclosure, Menu } from '@headlessui/react';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { Games } from '..';
import MenuButton from '../MenuButton';
import { games } from '@/data/games';
import { triggerModal } from '@/store/slices/modal';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { lettersAndNumbersOnly } from '@/utils/strings';
import store from '@/store';
import Leaderboard from './Leaderboard';
import Affiliates from './Affiliates';
import Race from './Race';
import './header.css';
import { SilverLockIcon } from '@/assets/icons';

const toggleHeaderModal = {
  leaderboard() {
    store.dispatch(
      triggerModal({
        children: <Leaderboard />,
        show: true,
      }),
    );
  },
  affiliates() {
    store.dispatch(
      triggerModal({
        children: <Affiliates />,
        show: true,
      }),
    );
  },
  race() {
    store.dispatch(
      triggerModal({
        children: <Race />,
        show: true,
      }),
    );
  },
};

export default function Header() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const [_, setSearchParams] = useSearchParams();
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   let isMounted = true;
  //   const controler = new AbortController();

  //   (async () => {
  //     try {
  //       const response = await api.get("/user", {
  //         signal: controler.signal,
  //       });

  //       console.log(response.data);
  //       isMounted && setUser(response.data);
  //     } catch (error) {
  //       console.error("GetAuth: ", { error });
  //     }
  //   })();

  //   return () => {
  //     isMounted = false;
  //     controler.abort();
  //   };
  // }, []);

  return (
    <header className="shrink-0 relative md:static h-16 flex py-2.5 w-full fixed_ !z-40 top-0 left-0 min-h-[var(--header-height)] max-h-[var(--header-height)] bg-dark-850 shadow-md whitespace-nowrap">
      <div className="mx-auto w-[97%] flex items-center h-full">
        <div className="flex items-center w-full gap-4">
          <h1 className="">
            <img src="/logo.png" className="w-48" />
          </h1>

          {/* <div className="flex items-center gap-4"></div> */}
          <HeaderItems />
          <HeaderItemsSM />
          {auth.isAuthenticated ? (
            <div className="flex ml-auto items-center gap-2 text-sm">
              <div className="bg-dark-750 rounded-l font-semibold pl-2 flex items-center gap-4 h-full max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2  max-h-10">
                <div className="relative flex items-center gap-1.5 px-0.5 cursor-pointer hover:opacity-75 transition-all text-sm">
                  <img
                    src={SilverLockIcon}
                    width="20"
                    height="20"
                    className="sc-x7t9ms-0 dnNpLQ"
                  />
                  <span className="">0.00</span>
                </div>
                <Button
                  className="text-sm rounded-sm m-0 h-full !rounded-l-none !p-0 lg:!py-2 !rounded-r w-[40px]"
                  onClick={() =>
                    dispatch(triggerModal({ children: <Wallet />, show: true }))
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                  </svg>
                </Button>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    triggerModal({
                      children: (
                        <UserProfile
                          username={auth.user?.username || ''}
                          self
                        />
                      ),
                    }),
                  )
                }
                className="!cursor-pointer bg-dark-750 h-full flex items-center gap-1.5 px-2 py-1 rounded font-semibold text-sm hover:opacity-75 transition-all"
              >
                <figure className="sc-1nayyv1-1 avatar cursor-pointer w-8 rounded-full overflow-clip">
                  {auth?.user?.photo ? (
                    <img
                      draggable="false"
                      src={auth.user.photo}
                      alt="Picture"
                      className="sc-1nayyv1-0 kedPqA"
                    />
                  ) : (
                    <UserIcon className="w-full aspect-square p-2_s !stroke-white" />
                  )}
                </figure>
                <span className="max-sm:hidden">{auth.user?.username}</span>
              </button>
            </div>
          ) : (
            <div className="ml-auto flex items-center gap-4">
              <button
                onClick={() => setSearchParams({ modal: 'sign-in' })}
                className="text-white text-sm font-semibold py-2 px-4"
              >
                Sign In
              </button>
              <Button onClick={() => setSearchParams({ modal: 'register' })}>
                Register
              </Button>
              <div className="hidden sm:block md:hidden">
                <MenuButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function HeaderItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showMenuBar = searchParams.get('show-menu') === 'true';

  const auth = useAppSelector((state) => state.auth);

  const HeaderLinkItem = ({
    icon,
    onClick,
    text,
  }: {
    icon: React.FC<React.SVGProps<SVGElement>>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
  }) => {
    const Icon = icon;
    return (
      <button onClick={(e) => onClick?.(e)} className="flex gap-1">
        <Icon />
        <p className="uppercase text-white text-sm font-bold">{text}</p>
      </button>
    );
  };
  return (
    <>
      <Overlay
        show={showMenuBar}
        handleShowOverlay={() => () =>
          setSearchParams({ 'show-menu': String(!showMenuBar) })
        }
        disableOnClick
        className="mt-16"
      />
      <div
        className={clsx(
          'fixed top-16 z-[1000] right-0 w-full sm:w-[280px] h-full bg-dark-850 md:hidden transition-transform duration-150',
          showMenuBar ? 'translate-x-0' : 'translate-x-full md:translate-x-0',
        )}
      >
        <div className="w-[92%] h-full mt-4 mx-auto">
          <div className="-z-10">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row items-center w-fit gap-1 justify-between">
                    <DieIcon className="!fill-primary !stroke-primary" />
                    <h5 className="text-primary !font-bold uppercase">games</h5>
                    <ExpandMoreIcon
                      className={`${
                        open ? 'rotate-180' : 'rotate-0'
                      } transform transition-transform duration-200 !stroke-primary`}
                    />
                  </Disclosure.Button>
                  <AnimateInOut
                    show={open}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ type: 'keyframes' }}
                    className="cursor-pointer flex flex-col w-full pt-[5px] overflow-clip space-y-2"
                  >
                    {games.map((game, i) => (
                      <p
                        className="text-sm text-white font-bold uppercase hover:-translate-y-[2px] transition-transform duration-100"
                        key={i}
                      >
                        {lettersAndNumbersOnly(game.title)}
                      </p>
                    ))}
                  </AnimateInOut>
                </>
              )}
            </Disclosure>
          </div>
          <div className="pt-4 bg-dark-850 z-10">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row items-center w-fit gap-1 justify-between">
                    <GiftBoxIcon className="!fill-primary !stroke-primary" />
                    <h5 className="text-primary !font-bold uppercase">
                      rewards
                    </h5>
                    <ExpandMoreIcon
                      className={`${
                        open ? 'rotate-180' : 'rotate-0'
                      } transform transition-transform duration-200 !stroke-primary`}
                    />
                  </Disclosure.Button>

                  <AnimateInOut
                    show={open}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ type: 'keyframes' }}
                    className="cursor-pointer flex flex-col w-full pt-[5px] overflow-clip space-y-2"
                  >
                    {[{ title: 'rakeback' }, { title: 'promo codes' }].map(
                      (reward, i) => (
                        <p
                          className="text-sm text-white font-bold uppercase hover:-translate-y-[2px] transition-transform duration-100"
                          key={i}
                        >
                          {reward.title}
                        </p>
                      ),
                    )}
                  </AnimateInOut>
                </>
              )}
            </Disclosure>
          </div>
          <div className="pt-4 space-y-4 bg-dark-850 h-full z-20">
            <HeaderLinkItem
              icon={CashStackIcon}
              text="affiliates"
              onClick={() =>
                auth.isAuthenticated
                  ? toggleHeaderModal.affiliates()
                  : setSearchParams({ modal: 'sign-in' })
              }
            />
            <HeaderLinkItem
              icon={TrophyIcon}
              text="leaderboard"
              onClick={() => toggleHeaderModal.leaderboard()}
            />
            <HeaderLinkItem
              icon={StopwatchIcon}
              text="race"
              onClick={() => toggleHeaderModal.race()}
            />
            <HeaderLinkItem icon={DiscordIcon} text="discord" />
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderItemsSM() {
  const auth = useAppSelector((state) => state.auth);

  const HeaderLinkItem = ({
    icon,
    onClick,
    text,
  }: {
    icon: React.FC<React.SVGProps<SVGElement>>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
  }) => {
    const Icon = icon;

    return (
      <button onClick={(e) => onClick?.(e)} className="flex gap-1">
        <Icon />
        <p className="uppercase text-white text-sm font-bold md:hidden">
          {text}
        </p>
      </button>
    );
  };

  const setSearchParams = useSearchParams()[1];

  // const HeaderMenu = ({}) =>

  return (
    <div className={clsx('w-full h-full hidden md:flex gap-4 ml-4')}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex flex-row items-center w-fit gap-1 justify-between">
              <DieIcon className="!fill-white !stroke-white" />
              {/* <h5 className="md:hidden text-white !font-bold uppercase">
                games
              </h5> */}
              <ExpandMoreIcon
                className={`${
                  open ? 'rotate-180' : 'rotate-0'
                } transform transition-transform duration-200 !stroke-white`}
              />
            </Menu.Button>

            <AnimateInOut
              show={open}
              initial={{ translateY: -400, opacity: 0 }}
              exit={{ translateY: -400, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: 'keyframes' }}
              className="absolute top-16 w-full left-0 h-full_ bg-dark-800 rounded-xl flex items-center justify-center p-2"
            >
              <div className="h-[96%] w-[99%] overflow-auto pr-2">
                <Games />
              </div>
              {/* </div> */}
            </AnimateInOut>
          </>
        )}
      </Menu>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex flex-row items-center w-fit gap-1 justify-between">
              <GiftBoxIcon className="!fill-white !stroke-white" />
              {/* <h5 className="md:hidden text-primary !font-bold uppercase">
                rewards
              </h5> */}
              <ExpandMoreIcon
                className={`${
                  open ? 'rotate-180' : 'rotate-0'
                } transform transition-transform duration-200 !stroke-white`}
              />
            </Menu.Button>

            <AnimateInOut
              show={open}
              initial={{ translateY: -400, opacity: 0 }}
              exit={{ translateY: -400, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: 'keyframes' }}
              className="absolute top-16 w-full left-0 h-full_ bg-dark-800 rounded-xl flex items-center justify-center p-2"
            >
              <div className="h-[96%] w-[99%] overflow-auto pr-2">
                <div className="flex items-center justify-center gap-4">
                  <div className="rounded-md w-60 overflow-clip">
                    {/* <p>{game.i}</p> */}
                    <img src={`/images/landing/rewards/rakeback.webp`} />
                  </div>
                  <div className="rounded-md w-60 overflow-clip">
                    {/* <p>{game.i}</p> */}
                    <img src={`/images/landing/rewards/promo.webp`} />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </AnimateInOut>
          </>
        )}
      </Menu>
      <div className="flex items-center gap-5">
        <HeaderLinkItem
          icon={CashStackIcon}
          text="affiliates"
          onClick={() =>
            auth.isAuthenticated
              ? toggleHeaderModal.affiliates()
              : setSearchParams({ modal: 'sign-in' })
          }
        />
        <HeaderLinkItem
          icon={TrophyIcon}
          text="leaderboard"
          onClick={() => toggleHeaderModal.leaderboard()}
        />
        <HeaderLinkItem
          icon={StopwatchIcon}
          text="race"
          onClick={() => toggleHeaderModal.race()}
        />
        <HeaderLinkItem icon={DiscordIcon} text="discord" />
      </div>
    </div>
  );
}
