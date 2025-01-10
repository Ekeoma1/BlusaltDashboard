import { BarSvg, BellSvg, ClockSvg, SearchSvg, SunSvg } from "../assets/svg"


const SearchAreaComponent = () => {
  return (
    <div className="search-area">
          <div className="search-input-wrapper">
            <label htmlFor="search">
              <SearchSvg />
            </label>
            <input id="search" type="text" placeholder="Search" />
          </div>
          <div className="icon-wrapper">
            <button>
              <SunSvg />
            </button>

            <button>
              <ClockSvg />
            </button>

            <button>
              <BellSvg />
            </button>

            <button>
              <BarSvg />
            </button>
          </div>
        </div>
  )
}

export default SearchAreaComponent