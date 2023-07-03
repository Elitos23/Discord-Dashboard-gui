import { useEffect, useState } from "react";
import { getGuildConfig } from "../api";
import { GuildConfigType } from "../types";

export function useFetchGuildConfig(guildId: string) {
  const [config, setConfig] = useState<GuildConfigType>()
  const [prefix, setPrefix] = useState('');
  const [wlrole, setWlrole] = useState('');
    const [channel, setChannel] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    getGuildConfig(guildId)
      .then(({data}) => {
      setConfig(data)
      setChannel(data.channel)
      setWlrole(data.wlrole)
      setPrefix(data.prefix)


    }

      ).catch((err) => {

        console.log(err)
      setError(err)
     })
      .finally(() => setTimeout(() => setLoading(false), 50))
  }, [])

  const updatePrefix = (prefix: string ) => {

  }
  const updateWlrole = (wlrole: string ) => {

  }
  const updateChannel = (channel: string ) => {

  }
  return {config, prefix, setPrefix, wlrole, setWlrole, channel, setChannel, loading, error}
}
