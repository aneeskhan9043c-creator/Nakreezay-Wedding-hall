import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildQuickWhatsAppUrl,
  buildWhatsAppBookingUrl,
  sanitizeWhatsAppNumber,
  validateBookingForm,
} from './booking.ts';

test('sanitizeWhatsAppNumber normalizes 0340-9553001 to 923409553001', () => {
  assert.equal(sanitizeWhatsAppNumber('0340-9553001'), '923409553001');
  assert.equal(sanitizeWhatsAppNumber('923409553001'), '923409553001');
});

test('validateBookingForm catches missing fields and passes valid submission', () => {
  const invalid = validateBookingForm({
    name: 'A',
    phone: '0300',
    eventType: 'Barat',
    guests: '5',
    eventDate: '',
  });
  assert.ok(invalid.name);
  assert.ok(invalid.phone);
  assert.ok(invalid.guests);

  const valid = validateBookingForm({
    name: 'Usman Khan',
    phone: '0340-9553001',
    eventType: 'Walima',
    guests: '300',
    eventDate: '',
  });
  assert.deepEqual(valid, {});
});

test('buildWhatsAppBookingUrl excludes any prices and targets 923409553001', () => {
  const url = buildWhatsAppBookingUrl({
    name: 'Tariq Mahmood',
    phone: '0340-9553001',
    eventType: 'Barat',
    guests: '350',
    eventDate: '2026-12-20',
  });
  assert.match(url, /^https:\/\/wa\.me\/923409553001\?text=/);
  const decoded = decodeURIComponent(url);
  assert.match(decoded, /Tariq Mahmood/);
  assert.match(decoded, /Barat/);
  assert.match(decoded, /2026-12-20/);
  assert.doesNotMatch(decoded, /\b(silver|platinum|per-head|rs|pkr|price|package)\b/i);
});

test('buildQuickWhatsAppUrl targets Nakreezay Banquet WhatsApp cleanly', () => {
  const url = buildQuickWhatsAppUrl();
  assert.match(url, /^https:\/\/wa\.me\/923409553001\?text=/);
  assert.match(decodeURIComponent(url), /Nakreezay Banquet/);
});
