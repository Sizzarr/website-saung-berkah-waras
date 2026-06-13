'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OrderPicker({ channels, className = '', label }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {label}
      </button>

      {open ? (
        <div
          className="order-picker-backdrop"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="order-picker-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Pilih jalur order"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="order-picker-head">
              <div>
                <span className="order-picker-kicker">Pesan sekarang</span>
                <h3>Pilih jalur order yang kamu mau</h3>
              </div>

              <button
                type="button"
                className="order-picker-close"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
              >
                x
              </button>
            </div>

            <div className="order-picker-list">
              {channels.map((channel) => {
                if (!channel.href) {
                  return (
                    <div
                      key={channel.name}
                      className="order-picker-card order-picker-card-disabled"
                    >
                      <span className="order-picker-icon">
                        <Image
                          src={channel.logo}
                          alt={channel.name}
                          fill
                          sizes="48px"
                        />
                      </span>
                      <div className="order-picker-copy">
                        <strong>{channel.name}</strong>
                        <span>{channel.description}</span>
                        <em>Belum tersedia</em>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="order-picker-card"
                    onClick={() => setOpen(false)}
                  >
                    <span className="order-picker-icon">
                      <Image
                        src={channel.logo}
                        alt={channel.name}
                        fill
                        sizes="48px"
                      />
                    </span>
                    <div className="order-picker-copy">
                      <strong>{channel.name}</strong>
                      <span>{channel.description}</span>
                      <em>Buka sekarang</em>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
